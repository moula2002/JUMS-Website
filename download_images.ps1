$images = @{
    "testimonial-1.jpg" = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80"
    "testimonial-2.jpg" = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
    "testimonial-3.jpg" = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
    "testimonials-bg.jpg" = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
    "solution-exec.jpg" = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
    "solution-contract.jpg" = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
    "solution-payroll.jpg" = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800"
    "solution-compliance.jpg" = "https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&q=80&w=800"
    "solutions-bg.jpg" = "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80"
    "services-bg.jpg" = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
    "resources-bg.jpg" = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
    "jobs-bg.jpg" = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80"
    "industry-it.jpg" = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600"
    "industry-health.jpg" = "https://images.unsplash.com/photo-1538108149393-cebb47cdf504?auto=format&fit=crop&q=80&w=600"
    "industry-mfg.jpg" = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
    "industry-finance.jpg" = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600"
    "industry-retail.jpg" = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600"
    "industry-logistics.jpg" = "https://images.unsplash.com/photo-1586528116311-ad8ed7c508b0?auto=format&fit=crop&q=80&w=600"
    "industries-bg.jpg" = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
    "blog-1.jpg" = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
    "faqs-bg.jpg" = "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80"
    "contact-bg.jpg" = "https://images.unsplash.com/photo-1554200876-56c2f25224fa?auto=format&fit=crop&q=80"
    "contact-map.jpg" = "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
    "blog-2.jpg" = "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=100"
    "about-bg.jpg" = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
    "about-who.jpg" = "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
    "team-1.jpg" = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
    "team-2.jpg" = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    "team-3.jpg" = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
    "team-4.jpg" = "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
}

New-Item -ItemType Directory -Force -Path "public/images"

foreach ($key in $images.Keys) {
    $url = $images[$key]
    $path = "public/images/$key"
    Write-Host "Downloading $key..."
    Invoke-WebRequest -Uri $url -OutFile $path
}
Write-Host "All downloads complete!"
