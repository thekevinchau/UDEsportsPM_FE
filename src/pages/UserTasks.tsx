import { useParams } from "react-router-dom"


export default function UserTasks(){
    const {id} = useParams();
    return <div>User Tasks {id}</div>
}