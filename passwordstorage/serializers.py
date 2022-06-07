from rest_framework import serializers
from .models import PasswordCell


class PassCellListSerializer(serializers.ModelSerializer):
    class Meta:
        model = PasswordCell
        fields = ("id", "service", "user")


class PassCellCreatelSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = PasswordCell
        fields = "__all__"


class PassCellDetailSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    class Meta:
        model = PasswordCell
        fields = "__all__"