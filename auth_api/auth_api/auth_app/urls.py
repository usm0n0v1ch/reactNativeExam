from django.urls import path, re_path, include
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
from rest_framework import permissions
from rest_framework.routers import DefaultRouter

from . import views

schema_view = get_schema_view(
    openapi.Info(
        title="Project API",
        default_version="v1",
        description="Example API",
    ),
    public=True,
    permission_classes=([permissions.AllowAny,]),
)
router= DefaultRouter()

router.register(r'cards', views.CardViewSet)



urlpatterns = [
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name="schema-json"),
    path("swagger/", schema_view.with_ui("swagger", cache_timeout=0), name="schema-swagger-ui"),

    path("register/", views.UserRegister.as_view(), name="register"),
    path("login/", views.UserLogin.as_view(), name="login"),

    path("", include(router.urls)),
    path('user_id/', views.user_id),
]
