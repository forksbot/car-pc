# coding: utf-8
from django.db import models


class Status(models.Model):
    VIDEO_STARTED = 'VIDEO_STARTED'
    OBD_STARTED = 'OBD_STARTED'
    NAME_CHOICES = (
        (VIDEO_STARTED, 'Video capturing started'),
        (OBD_STARTED, 'OBD II capturing started'),
    )

    name = models.CharField(max_length=100, unique=True, choices=NAME_CHOICES)
    value = models.CharField(max_length=255, null=True, blank=True)

    @classmethod
    def GetValue(cls, name, default=None):
        instance, created = cls.objects.get_or_create(name=name, defaults={'value': default})
        return instance.value

    @classmethod
    def SetValue(cls, name, value):
        cls.objects.get_or_create(name=name)    # create if needed
        return cls.objects.filter(name=name).update(value=value)