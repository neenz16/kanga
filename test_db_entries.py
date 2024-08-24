from api.models import Subscriber
emails = Subscriber.objects.all()
  for email in emails:
    print(email.email)
