from django.contrib.auth.models import User
from django.db import models


# Create your models here.


class Card(models.Model):
    name = models.CharField(max_length=100)
    number = models.CharField(max_length=255)
    date = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    balance = models.IntegerField()
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.name