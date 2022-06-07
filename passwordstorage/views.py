from rest_framework import generics
from .serializers import *
from .models import PasswordCell
from .permission import IsOwnerOrReadOnly, IsOwner
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.authentication import TokenAuthentication


class PassCellCreateView(generics.CreateAPIView):
    serializer_class = PassCellCreatelSerializer
    permission_classes = (IsAuthenticated, )


class PassCellListView(generics.ListAPIView):
    serializer_class = PassCellListSerializer
    queryset = PasswordCell.objects.all()

    def get_queryset(self):
        user = self.request.user
        return PasswordCell.objects.filter(user=user)
    permission_classes = (IsAuthenticated, IsOwner,)


class PassCellDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = PassCellDetailSerializer
    queryset = PasswordCell.objects.all()
    authentication_classes = (TokenAuthentication, )
    permission_classes = (IsOwnerOrReadOnly, IsAuthenticated, IsOwner, )