# parser-serialization
●  Разработать парсер формата сериализации с унифицированным интерфейсом парсинга и интерфейсом доступа к разобранным синтаксическим конструкциям (как DOM для HTML). Специальный интерфейс доступа к структурам данных нужен только если парсер выдает не нативные структуры данных языка, а специально построенные классы, например, TreeNode, ListItem, Table. Минимальный парсер должен реализовывать: serialize(obj), parse(packet). Желательно так же реализовать функции: поиск, фильтрация, сортировка, отображение, операции со множествами и др. Форматы на выбор: JSON, YAML, CSV, INI или свой формат.

### Electron app
```js
npm i
npm start
```
### Running python server

```py
$ export FLASK_APP=server.py
$ python -m flask run
 * Running on http://127.0.0.1:5000/
```

### Server start
```py
sudo lsof -i tcp:8000
kill 12345
gunicorn -w 4 server:app
```
