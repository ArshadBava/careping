from rest_framework import generics
from .models import Blog, Testimonial
from .serializers import BlogSerializer, TestimonialSerializer

class BlogListAPIView(generics.ListAPIView):
    queryset = Blog.objects.all().order_by('-created_at')
    serializer_class = BlogSerializer

class BlogDetailAPIView(generics.RetrieveAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    lookup_field = 'slug'

class TestimonialListAPIView(generics.ListAPIView):
    queryset = Testimonial.objects.all().order_by('-rating')
    serializer_class = TestimonialSerializer
