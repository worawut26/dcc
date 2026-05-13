# Generate Private Key and CSR for dynamiccomputer.co.th
# Requirements: OpenSSL must be installed (https://slproweb.com/products/Win32OpenSSL.html)

$domain = "dynamiccomputer.co.th"
$keyFile = ".\certificates\$domain.key"
$csrFile = ".\certificates\$domain.csr"
$cnfFile = ".\certificates\openssl.cnf"

Write-Host "Generating private key..." -ForegroundColor Cyan
openssl genrsa -out $keyFile 2048

Write-Host "Generating CSR..." -ForegroundColor Cyan
openssl req -new -key $keyFile -out $csrFile -config $cnfFile

Write-Host ""
Write-Host "Done!" -ForegroundColor Green
Write-Host "  Private Key : $keyFile"
Write-Host "  CSR File    : $csrFile"
Write-Host ""
Write-Host "Submit the .csr file to your CA (e.g. Sectigo, DigiCert, ZeroSSL)" -ForegroundColor Yellow
Write-Host "Keep the .key file SECRET — never share or commit it." -ForegroundColor Red
