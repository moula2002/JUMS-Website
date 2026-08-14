$images = @{
    "solution-compliance.jpg" = "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80"
    "industry-health.jpg" = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80"
    "blog-2.jpg" = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=100&q=80"
    "industry-logistics.jpg" = "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=600&q=80"
}

foreach ($key in $images.Keys) {
    $url = $images[$key]
    $path = "public/images/$key"
    Write-Host "Downloading $key..."
    Invoke-WebRequest -Uri $url -OutFile $path
}
Write-Host "Retry downloads complete!"
