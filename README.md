# Порождающие паттерны
### Factory
***
Процедура создания экземпляров класса выносится в отдельный метод или функцию. Используется часто для цепного стиля, чтобы не создавать
новые переменные. Пример:  
![паттерн](/p.png)  
### Factory method
***
Фабричный метод определяет интерфайс для создания объекта, но позволяет подклассам решать какой класс инстанцировать. Позволяет делегировать создание объекта подклассам. Фабричный метод делегирует логику создания экземпляров дочерними классами. Дочерние классы переопределяют метод у родительского класса взависимости от экземпляра. Используется если логика работы с разыми сущностями одинаковая, но тип сущности будет выявлен только во время работы кода. Пример [Task3.4.js]()
![паттерн](/p1.jpg)  
### Abstract Factory
***
Представляет интерфейс для создания групп связанных или зависимых объектов, не указывая их конкертный класс. Паттерн необходим для объединения взаимосвязанных либо взаимозависимых сущностей , чтобы из одной фактории иметь доступ до всех взаимосвязанных сущностей.
Пример: [Task3.5.js]()  
![паттерн](/p2.jpg)  
### Builder
***
Разделяет создание сложного объекта и инициализацию его состояния так, что одинаковый процесс построения может создать объекты с разным состоянием. Предположим у нас есть класс, конструктор корого принимает множество аргументов. Чтобы создать экземпляр, нужно передать их все, при чем в определенном порядке. Builder избавляет нас от этого. Записывает в его конст Пример: [Task3.3]()  
![паттерн](/p3.jpg)  
### Singleton
***
Гарантирует, что класс имеет только один экземпляр и предоставляет глобальную точку доступа к нему. Паттерн часто используется для создания каких-то базовых модулей, которые должны быть в едиственном числе. Пример: [Task3.2]()  
![паттерн](/p4.jpg)
### Prototype
***
Определяет несколько видов объектов, чтобы при создании использовать объект-прототип и создает новый объект, копируюя прототип. Используются в классах, которые испытавают потребность в создании копий экземпляров. Пример: [Task3.3]()  
![pattern](/p5.jpg)

