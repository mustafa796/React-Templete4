import React,{useState} from 'react'
import data from './data'


export default function Birthday() {
    const [people, setpeople] = useState(data)
  return (
    <>
<div>
<h1>
    Today Birthday
</h1>
<p>
    {people.length}
</p>
<div>
    {
        people.map(
            (item)=>{
              return  (<ul>
                    <li>{item.id}</li>
                    <li>{item.name}</li>
                    <li>{item.age}</li>
                </ul>
)            }
        )
    }
</div>

</div>



    </>
  )
}
