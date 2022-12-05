**Read in other languages: [Русский](README.md), [Polska](README.pl.md),
[English](README.en.md), [Spanish](README.es.md).**

# React homework template

Этот проект был создан при помощи
[Create React App](https://github.com/facebook/create-react-app). Для знакомства
и настройки дополнительных возможностей
[обратись к документации](https://facebook.github.io/create-react-app/docs/getting-started).

## Подготовка нового проекта

1. Убедись что на компьютере установлена LTS-версия Node.js.
   [Скачай и установи](https://nodejs.org/en/) её если необходимо.
2. Установи базовые зависимости проекта командой `npm install`.
3. Запусти режим разработки, выполнив команду `npm start`.
4. Перейди в браузере по адресу [http://localhost:3000](http://localhost:3000).
   Эта страница будет автоматически перезагружаться после сохранения изменений в
   файлах проекта.

Создан репозиторий goit-react-hw-07-phonebook Использована библиотека Redux
Toolkit Книга контактов Выполни рефакторинг кода приложения «Книга контактов».
Удали код отвечающий за хранение и чтение контактов из локального хранилища, и
добавь взаимодействие с бэкендом для хранения контактов.

Бэкенд Создай свой персональный бэкенд для разработки при помощи UI-сервиса
mockapi.io(https://mockapi.io/). Зарегистрируйся используя свой аккаунт GitHub.
Создай ресурс contacts чтобы получить ендпоинт /contacts. Используй конструктор
ресурса и опиши объект контакта как на иллюстрации.

Contact schema Форма состояния Добавь в состояние Redux обработку индикатора
загрузки и ошибки. Для этого измени форму состояния.

{ contacts: { items: [], isLoading: false, error: null }, filter: "" }

Операции Используй функцию
createAsyncThunk(https://redux-toolkit.js.org/api/createAsyncThunk) для
объявления асинхронный генераторов экшенов и выполнения HTTP-запросов. Обработку
экшенов и изменение данных в состоянии Redux сделай при помощи
createSlice(https://redux-toolkit.js.org/api/createSlice).

Объяви следующие операции:

fetchContacts - получение массива контактов (метод GET) запросом. Базовый тип
экшена "contacts/fetchAll". addContact - добавление контакта (метод POST).
Базовый тип экшена "contacts/addContact". deleteContact - удаление контакта
(метод DELETE). Базовый тип экшена "contacts/deleteContact".
