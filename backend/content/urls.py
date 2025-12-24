from django.urls import path
from .views import BlogListAPIView, BlogDetailAPIView, TestimonialListAPIView

urlpatterns = [
    path('blogs/', BlogListAPIView.as_view(), name='blog-list'),
    path('blogs/<slug:slug>/', BlogDetailAPIView.as_view(), name='blog-detail'),
    path('testimonials/', TestimonialListAPIView.as_view(), name='testimonial-list'),
]
