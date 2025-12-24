import os
import django
from django.core.files.uploadedfile import SimpleUploadedFile
from PIL import Image
from io import BytesIO

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from content.models import Blog, Testimonial

def create_dummy_image():
    file = BytesIO()
    image = Image.new('RGB', (600, 400), color='blue')
    image.save(file, 'jpeg')
    file.seek(0)
    return SimpleUploadedFile(name='test_image.jpg', content=file.read(), content_type='image/jpeg')

def seed():
    # Clear existing
    Blog.objects.all().delete()
    Testimonial.objects.all().delete()
    print("Cleared existing data.")

    # Blogs
    blogs = [
        {
            "title": "The Future of Telehealth",
            "description": "Telehealth is revolutionizing how we access care. From remote monitoring to video consultations, discover the benefits...",
            "image": create_dummy_image()
        },
        {
            "title": "Post-Operative Care at Home",
            "description": "Recovering at home can be daunting. Here are essential tips for managing wounds, medications, and mobility after surgery...",
            "image": create_dummy_image()
        },
        {
            "title": "Mental Health in Seniors",
            "description": "Depression and isolation are common in the elderly. Learn how to spot the signs and provide support...",
            "image": create_dummy_image()
        }
    ]

    for b in blogs:
        Blog.objects.create(
            title=b['title'],
            slug=b['title'].lower().replace(' ', '-'),
            description=b['description'],
            image=b['image']
        )
    print(f"Created {len(blogs)} blogs.")

    # Testimonials
    testimonials = [
        {
            "name": "Sarah Jenkins",
            "role": "Daughter of Patient",
            "message": "CarePing changed our lives. The nurse was so attentive and the app made it easy to track updates. Highly recommended!",
            "rating": 5
        },
        {
            "name": "Michael Tan",
            "role": "Patient (Post-Op)",
            "message": "I was back on my feet in no time thanks to the rehab team. Professional and caring.",
            "rating": 5
        },
        {
            "name": "Dr. Emily Wei",
            "role": "Partner Physician",
            "message": "Seamless integration with my practice. My patients love the convenience.",
            "rating": 5
        }
    ]

    for t in testimonials:
        Testimonial.objects.create(**t)
    print(f"Created {len(testimonials)} testimonials.")

if __name__ == '__main__':
    seed()
