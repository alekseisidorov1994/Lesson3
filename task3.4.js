// Задание №4 (**)
// Напишите класс UI с методом mountTable и с 
// фабричным методом getTable. 
// Унаследуйте UI в классах Bootstrap и 
// Material.Продемонстрируйте, как это будет 
// работать на реальном примере.

// P.S. На реальном примере значит подключите 
// стили bootstrap и material design,
//  создайте таблицы и монтируйте их с 
//  помощью экземпляров соответствующих классов.


class TableBootstrap{
    createTable(){
        const elem = document.createElement('div')
        elem.innerHTML=`<table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>`
      document.body.append(elem)
    }

}
class TableSkeleton{
  createTable(){
    const elem = document.createElement('div')
    elem.innerHTML=`<table class="u-full-width">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Sex</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Dave Gamache</td>
        <td>26</td>
        <td>Male</td>
        <td>San Francisco</td>
      </tr>
      <tr>
        <td>Dwayne Johnson</td>
        <td>42</td>
        <td>Male</td>
        <td>Hayward</td>
      </tr>
    </tbody>
  </table>`
  document.body.append(elem)
  }
}

class UI {
    getTable(){
        const table = this.mountTable()
        table.createTable()
        
    }
    mountTable(){
        throw Error ('This method is undefined in the class')
    }
}


class Bootstrap extends UI{
    mountTable(){
        return new TableBootstrap()
    }

}

class Skeleton extends UI{
    mountTable(){
        return new TableSkeleton()
    }
}


const tableB = new Bootstrap()
const tableS = new Skeleton()
tableB.getTable()
tableS.getTable()