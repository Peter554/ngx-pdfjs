function BuildDocs {
    param (
        [string] $SiteUrl,
        [string] $ProjectName
    )

    $Here = $PSScriptRoot
    $Project = Join-Path $Here $ProjectName
    $Dist = Join-Path $Project (Join-Path dist $ProjectName)
    $Docs = Join-Path $Here docs
    
    if (Test-Path $Docs) {
        Remove-Item $Docs\* -Force -Recurse
    }
    else {
        New-Item -Path $Docs -ItemType Directory
    }

    Push-Location $Project
    ng build --prod --base-href $SiteUrl
    Pop-Location

    Copy-Item $Dist\* $Docs -Recurse
}

BuildDocs -SiteUrl "https://peter554.github.io/ngx-pdfjs/" -ProjectName "web-ui"