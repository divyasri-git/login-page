Back-end (Django Python):
python
from django.http import JsonResponse

def login(request):
if request.method == 'POST':
username = request.POST.get('username')
password = request.POST.get('password')

# Authenticate user in database
# Example:
# user = User.objects.get(username=username)
# if user.check_password(password):
# return JsonResponse({'message': 'Login successful'})
# else:
# return JsonResponse({'message': 'Incorrect username or password'}, status=401)

return JsonResponse({'message': 'Method not allowed'}, status=405)
