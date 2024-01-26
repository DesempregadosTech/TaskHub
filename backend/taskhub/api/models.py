from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    nome = models.CharField(max_length = 255)
    descricao = models.CharField(max_length = 500, blank = True)
    amizade_id = models.ManyToManyField('self', blank=True)

    def __str__(self):
        return self.username