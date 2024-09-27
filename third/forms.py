from django.forms import ModelForm
from third.models import Restaurant
from django.utils.translation import gettext_lazy as _ #gettext_lazy를 _로 대체

class RestaurantForm(ModelForm):
    class Meta:
        model = Restaurant
        fields = ['name', 'address']
        labels = {
            'name' : _('이름'),
            'address' : _('주소')
        }
        help_texts = {
            'name' : _('이름을 입력해주세요.'),
            'address' : _('주소를 입력해주세요.')
        }
        error_messages = {
            'name' : {
                'max_length' :_('이름이 너무 깁니다. 30자 이내로 작성해주세요.')
            }
        }