from rest_framework import serializers
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password', 'nome', 'descricao', 'amizade_id']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = CustomUser(
            username=validated_data['username'],
            email=validated_data['email'],
            nome=validated_data['nome'],
            descricao=validated_data['descricao'],
            amizade_id=validated_data['amizade_id']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
    