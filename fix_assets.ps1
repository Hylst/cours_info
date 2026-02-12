# Fix Assets Script

# 1. HTML Module
$htmlParams = @{
    SourceIcon = "assets\img\icons\html.webp"
    SourceSocial = "assets\img\icons\html.webp" # Using same for now if no specific social card
    DestDir = "html\assets"
    IconName = "html-icon.webp"
    SocialName = "html-social-card.webp"
    HtmlFile = "html\index.html"
}
if (-not (Test-Path $htmlParams.DestDir)) { New-Item -ItemType Directory -Force -Path $htmlParams.DestDir }
Copy-Item $htmlParams.SourceIcon -Destination "html\assets\$($htmlParams.IconName)" -Force
Copy-Item $htmlParams.SourceSocial -Destination "html\assets\$($htmlParams.SocialName)" -Force
# Update HTML to use webp icon if it was svg before
(Get-Content $htmlParams.HtmlFile) -replace 'href="assets/html-icon.svg"', 'href="assets/html-icon.webp"' | Set-Content $htmlParams.HtmlFile

# 2. Node.js Module
$nodeParams = @{
    SourceIcon = "assets\img\icons\nodejs.webp"
    SourceSocial = "assets\img\icons\nodejs.webp"
    DestDir = "node_js\assets\img"
    IconName = "favicon.webp"
    SocialName = "nodejs-share.webp"
    HtmlFile = "node_js\index.html"
}
if (-not (Test-Path $nodeParams.DestDir)) { New-Item -ItemType Directory -Force -Path $nodeParams.DestDir }
Copy-Item $nodeParams.SourceIcon -Destination "node_js\assets\img\$($nodeParams.IconName)" -Force
Copy-Item $nodeParams.SourceSocial -Destination "node_js\assets\img\$($nodeParams.SocialName)" -Force
# Update HTML tags
$nodeContent = Get-Content $nodeParams.HtmlFile
$nodeContent = $nodeContent -replace 'href="../../assets/img/icons/favicon.ico"', 'href="assets/img/favicon.webp"'
$nodeContent = $nodeContent -replace 'type="image/x-icon"', 'type="image/webp"'
$nodeContent | Set-Content $nodeParams.HtmlFile

# 3. Networks Module
$netParams = @{
    SourceIcon = "assets\img\icons\networks.webp"
    SourceSocial = "assets\img\icons\networks.webp"
    DestDir = "networks\img"
    IconName = "favicon.webp"
    SocialName = "og-image.webp"
    HtmlFile = "networks\index.html"
}
if (-not (Test-Path $netParams.DestDir)) { New-Item -ItemType Directory -Force -Path $netParams.DestDir }
Copy-Item $netParams.SourceIcon -Destination "networks\img\$($netParams.IconName)" -Force
Copy-Item $netParams.SourceSocial -Destination "networks\img\$($netParams.SocialName)" -Force
# Update HTML
$netContent = Get-Content $netParams.HtmlFile
$netContent = $netContent -replace 'href="img/favicon.ico"', 'href="img/favicon.webp"'
$netContent = $netContent -replace 'href="https://hylst.fr/cours/networks/img/og-image.png"', 'content="img/og-image.webp"' # Local path better?
$netContent = $netContent -replace 'type="image/x-icon"', 'type="image/webp"'
$netContent | Set-Content $netParams.HtmlFile

# 4. React Module (Missing Tags completely)
$reactDir = "react\assets\img"
if (-not (Test-Path $reactDir)) { New-Item -ItemType Directory -Force -Path $reactDir }
Copy-Item "assets\img\icons\react.webp" -Destination "$reactDir\favicon.webp" -Force
Copy-Item "assets\img\icons\react.webp" -Destination "$reactDir\social-share.webp" -Force

$reactHtml = Get-Content "react\index.html"
# Insert tags before </head> if not present
if ($reactHtml -notmatch "rel=""icon""") {
    $tags = '    <link rel="icon" type="image/webp" href="assets/img/favicon.webp">' + "`n" + 
            '    <meta property="og:image" content="https://hylst.fr/cours/docker/react/assets/img/social-share.webp">'
    $reactHtml = $reactHtml -replace '</head>', "$tags`n</head>"
    $reactHtml | Set-Content "react\index.html"
}

# 5. PHP Module (Missing Tags)
$phpDir = "php\assets\img"
if (-not (Test-Path $phpDir)) { New-Item -ItemType Directory -Force -Path $phpDir }
Copy-Item "assets\img\icons\php.webp" -Destination "$phpDir\favicon.webp" -Force
Copy-Item "assets\img\icons\php.webp" -Destination "$phpDir\social-share.webp" -Force

$phpHtml = Get-Content "php\index.html"
if ($phpHtml -notmatch "rel=""icon""") {
    $tags = '    <link rel="icon" type="image/webp" href="assets/img/favicon.webp">' + "`n" + 
            '    <meta property="og:image" content="https://hylst.fr/php/assets/img/social-share.webp">'
    $phpHtml = $phpHtml -replace '</head>', "$tags`n</head>"
    $phpHtml | Set-Content "php\index.html"
}

# 6. Docker Module (Missing Icon)
$dockerDir = "docker\assets\img"
if (-not (Test-Path $dockerDir)) { New-Item -ItemType Directory -Force -Path $dockerDir }
Copy-Item "assets\img\favicon-512.png" -Destination "$dockerDir\favicon.png" -Force
# Assuming social image valid from check

$dockerHtml = Get-Content "docker\index.html"
if ($dockerHtml -notmatch "rel=""icon""") {
    $tags = '    <link rel="icon" type="image/png" href="assets/img/favicon.png">'
    $dockerHtml = $dockerHtml -replace '</head>', "$tags`n</head>"
    $dockerHtml | Set-Content "docker\index.html"
}

# 7. Automation Module (Missing Assets)
$autoDir = "automation\assets"
if (-not (Test-Path $autoDir)) { New-Item -ItemType Directory -Force -Path $autoDir }
# Use a generic one or copy something relevant. maybe 'ai' or 'robot'? 
# Listing global icons showed: css, html, java, js, networks, nodejs, php, python, react.
# No automation specific. Use favicon-512.png from root assets as fallback?
Copy-Item "assets\img\favicon-512.png" -Destination "$autoDir\icon.png" -Force
Copy-Item "assets\img\og-image.png" -Destination "$autoDir\social_card.png" -Force

# 8. Cybersecurity (Missing Tags)
$cyberDir = "cybersecurity\assets\img"
if (-not (Test-Path $cyberDir)) { New-Item -ItemType Directory -Force -Path $cyberDir }
Copy-Item "assets\img\favicon-512.png" -Destination "$cyberDir\favicon.png" -Force
Copy-Item "assets\img\og-image.png" -Destination "$cyberDir\social-share.png" -Force

$cyberHtml = Get-Content "cybersecurity\index.html"
if ($cyberHtml -notmatch "rel=""icon""") {
    $tags = '    <link rel="icon" type="image/png" href="assets/img/favicon.png">' + "`n" + 
            '    <meta property="og:image" content="https://hylst.fr/cybersecurity/assets/img/social-share.png">'
    $cyberHtml = $cyberHtml -replace '</head>', "$tags`n</head>"
    $cyberHtml | Set-Content "cybersecurity\index.html"
}

# 9. Embedded (Missing Tags)
$embedDir = "embedded\assets\img"
if (-not (Test-Path $embedDir)) { New-Item -ItemType Directory -Force -Path $embedDir }
Copy-Item "assets\img\favicon-512.png" -Destination "$embedDir\favicon.png" -Force
Copy-Item "assets\img\og-image.png" -Destination "$embedDir\social-share.png" -Force

$embedHtml = Get-Content "embedded\index.html"
if ($embedHtml -notmatch "rel=""icon""") {
    $tags = '    <link rel="icon" type="image/png" href="assets/img/favicon.png">' + "`n" + 
            '    <meta property="og:image" content="https://hylst.fr/embedded/assets/img/social-share.png">'
    $embedHtml = $embedHtml -replace '</head>', "$tags`n</head>"
    $embedHtml | Set-Content "embedded\index.html"
}
