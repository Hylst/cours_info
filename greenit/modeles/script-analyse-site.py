#!/usr/bin/env python3
"""
Script d'analyse Green IT pour site web
Analyse l'empreinte environnementale d'un site web

Usage: python script-analyse-site.py <url>
Example: python script-analyse-site.py https://example.com

Auteur: Le Green IT en clair (hylst.fr/greenit)
License: MIT - Libre d'usage
"""

import sys
import json
import re
from urllib.parse import urlparse
from datetime import datetime

try:
    import requests
    from bs4 import BeautifulSoup
except ImportError:
    print("❌ Dépendances manqu antes. Installez-les avec:")
    print("   pip install requests beautifulsoup4")
    sys.exit(1)


class WebsiteAnalyzer:
    """Analyseur d'empreinte environnementale de site web"""
    
    def __init__(self, url):
        self.url = url
        self.domain = urlparse(url).netloc
        self.results = {
            "url": url,
            "date_analyse": datetime.now().isoformat(),
            "poids": {},
            "ressources": {},
            "ecoconception": {},
            "score_global": 0
        }
    
    def analyze(self):
        """Lance l'analyse complète"""
        print(f"\n🌱 Analyse Green IT de: {self.url}\n")
        
        try:
            # Récupération de la page
            response = requests.get(self.url, timeout=10)
            response.raise_for_status()
            
            html_content = response.text
            soup = BeautifulSoup(html_content, 'html.parser')
            
            # Analyses
            self._analyze_weight(html_content, response)
            self._analyze_dom(soup)
           self._analyze_resources(soup)
            self._analyze_best_practices(soup, html_content)
            self._calculate_score()
            
            # Affichage du rapport
            self._display_report()
            
            # Sauvegarde
            self._save_results()
            
        except requests.exceptions.RequestException as e:
            print(f"❌ Erreur lors de la récupération de la page: {e}")
            sys.exit(1)
    
    def _analyze_weight(self, html_content, response):
        """Analyse le poids de la page"""
        html_size = len(html_content.encode('utf-8'))
        total_size = html_size
        
        # Estimation taille headers
        headers_size = sum(len(k) + len(v) for k, v in response.headers.items())
        total_size += headers_size
        
        self.results["poids"] = {
            "html_ko": round(html_size / 1024, 2),
            "total_estime_ko": round(total_size / 1024, 2),
            "headers_ko": round(headers_size / 1024, 2)
        }
        
        print(f"📊 Poids HTML: {self.results['poids']['html_ko']} Ko")
    
    def _analyze_dom(self, soup):
        """Analyse la complexité du DOM"""
        total_elements = len(soup.find_all())
        divs = len(soup.find_all('div'))
        depth = self._get_dom_depth(soup)
        
        self.results["dom"] = {
            "elements_total": total_elements,
            "divs": divs,
            "profondeur_max": depth
        }
        
        print(f"🔍 Éléments DOM: {total_elements}")
        print(f"   - Profondeur max: {depth}")
        
        # Recommandations
        if total_elements > 1500:
            print("   ⚠️  DOM très complexe (>1500 éléments)")
        if depth > 15:
            print("   ⚠️  Profondeur excessive (>{depth})")
    
    def _get_dom_depth(self, element, depth=0):
        """Calcule la profondeur max du DOM"""
        if not element.children:
            return depth
        return max([self._get_dom_depth(child, depth + 1) 
                   for child in element.children 
                   if child.name], default=depth)
    
    def _analyze_resources(self, soup):
        """Analyse les ressources externes"""
        images = soup.find_all('img')
        scripts = soup.find_all('script', src=True)
        links_css = soup.find_all('link', rel='stylesheet')
        
        # Analyse images
        images_without_alt = [img for img in images if not img.get('alt')]
        images_format_moderne = [img for img in images 
                                if img.get('src', '').endswith(('.webp', '.avif'))]
        
        self.results["ressources"] = {
            "images_total": len(images),
            "images_sans_alt": len(images_without_alt),
            "images_format_moderne": len(images_format_moderne),
            "scripts_externes": len(scripts),
            "css_externes": len(links_css)
        }
        
        print(f"\n📦 Ressources:")
        print(f"   - Images: {len(images)}")
        if images_without_alt:
            print(f"   ⚠️  {len(images_without_alt)} images sans attribut alt")
        if len(images) > 0:
            ratio_moderne = len(images_format_moderne) / len(images) * 100
            print(f"   - Formats modernes (WebP/AVIF): {ratio_moderne:.0f}%")
        print(f"   - Scripts JS: {len(scripts)}")
        print(f"   - CSS externes: {len(links_css)}")
    
    def _analyze_best_practices(self, soup, html_content):
        """Vérifie les bonnes pratiques écoconception"""
        checks = {}
        
        # Compression
        checks["html_minifie"] = not bool(re.search(r'\n\s{4,}', html_content))
        
        # Inline critiques
        inline_styles = bool(soup.find_all(style=True))
        checks["pas_inline_styles"] = not inline_styles
        
        # Meta viewport
        checks["meta_viewport"] = bool(soup.find('meta', attrs={'name': 'viewport'}))
        
        # Lazy loading
        lazy_images = soup.find_all('img', loading='lazy')
        checks["lazy_loading"] = len(lazy_images) > 0
        
        # Dark mode
        checks["dark_mode_support"] = bool(
            soup.find('meta', attrs={'name': 'color-scheme'}) or
            'prefers-color-scheme' in html_content
        )
        
        # Polices locales
        font_faces = re.findall(r'@font-face', html_content)
        external_fonts = soup.find_all('link', href=re.compile(r'fonts\.(googleapis|gstatic)'))
        checks["polices_locales"] = len(font_faces) > len(external_fonts)
        
        self.results["ecoconception"] = checks
        
        print(f"\n✅ Bonnes pratiques:")
        for check, passed in checks.items():
            icon = "✓" if passed else "✗"
            print(f"   {icon} {check.replace('_', ' ').title()}")
    
    def _calculate_score(self):
        """Calcule un score global sur 100"""
        score = 100
        
        # Pénalités poids
        if self.results["poids"]["html_ko"] > 100:
            score -= 10
        if self.results["poids"]["html_ko"] > 200:
            score -= 10
        
        # Pénalités DOM
        if self.results["dom"]["elements_total"] > 1500:
            score -= 10
        if self.results["dom"]["profondeur_max"] > 15:
            score -= 5
        
        # Pénalités ressources
        if self.results["ressources"]["scripts_externes"] > 10:
            score -= 10
        if self.results["ressources"]["images_sans_alt"] > 0:
            score -= 5
        
        # Bonus bonnes pratiques
        good_practices = sum(1 for v in self.results["ecoconception"].values() if v)
        score += good_practices * 3
        
        self.results["score_global"] = max(0, min(100, score))
    
    def _display_report(self):
        """Affiche le rapport final"""
        score = self.results["score_global"]
        
        print(f"\n{'='*50}")
        print(f"📊 SCORE GLOBAL: {score}/100")
        
        if score >= 80:
            niveau = "🟢 Excellent"
        elif score >= 60:
            niveau = "🟡 Bon"
        elif score >= 40:
            niveau = "🟠 Moyen"
        else:
            niveau = "🔴 À améliorer"
        
        print(f"   Niveau: {niveau}")
        print(f"{'='*50}\n")
        
        # Recommandations
        print("💡 Recommandations principales:")
        
        if self.results["poids"]["html_ko"] > 100:
            print("   1. Réduire le poids HTML (minification, compression)")
        
        if self.results["ressources"]["images_sans_alt"] > 0:
            print("   2. Ajouter des attributs alt à toutes les images")
        
        if not self.results["ecoconception"].get("lazy_loading"):
            print("   3. Implémenter le lazy loading pour les images")
        
        if self.results["ressources"]["scripts_externes"] > 5:
            print("   4. Réduire le nombre de scripts externes")
        
        if not self.results["ecoconception"].get("dark_mode_support"):
            print("   5. Ajouter le support du mode sombre")
        
        print()
    
    def _save_results(self):
        """Sauvegarde les résultats en JSON"""
        filename = f"analyse_{self.domain}_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
        
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(self.results, f, indent=2, ensure_ascii=False)
        
        print(f"💾 Rapport sauvegardé: {filename}\n")


def main():
    """Point d'entrée du script"""
    if len(sys.argv) < 2:
        print("Usage: python script-analyse-site.py <url>")
        print("Exemple: python script-analyse-site.py https://example.com")
        sys.exit(1)
    
    url = sys.argv[1]
    
    # Validation basique de l'URL
    if not url.startswith(('http://', 'https://')):
        url = 'https://' + url
    
    analyzer = WebsiteAnalyzer(url)
    analyzer.analyze()
    
    print("✨ Analyse terminée !")
    print("Pour plus d'infos: https://hylst.fr/greenit\n")


if __name__ == "__main__":
    main()
