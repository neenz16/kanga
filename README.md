Backend Setup:

Clone the Repository:
git clone https://github.com/neenz16/kanga.git
cd kanga/backend

Create a Virtual Environment:
python -m venv env
source env/bin/activate

Dependencies:
pip install -r requirements.txt

Apply migrations and run server:
python manage.py migrate
python manage.py runserver

Frontend Setup:
cd ../frontend

Install Dependencies:
npm install

Start React server:
npm start

Open broswer tabs:
To view Frontend: http://localhost:3001
To view Backkend: http://localhost:8001/api/








kanga/
│
├── backend/
│   ├── api/
│   │   ├── views.py
│   │   ├── serializers.py
│   ├── backend/
│   │   ├── settings.py
│   │   ├── urls.py
│   ├── manage.py
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── api.js
│
├── README.md
└── .gitignore
