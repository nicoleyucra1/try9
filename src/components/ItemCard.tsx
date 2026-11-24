import {Link} from 'react-router-dom';
import type {Item} from '../types';

interface Props {item: Item;}

export default function ItemCar({item}: Props){
    return (
        <div className="card bg-base-100 shadow p-4">
            <h2 className="font-bold">{item.name}</h2>
            <p>{item.acceptReports}</p>
            <p>{item.building}</p>
            <p>{item.floor}</p>
            <p>{item.openReports}</p>
            <Link to={`/locations/${item.id} className="btn btn-sm btn-primary"`}>Ver detalle</Link>
        </div>
    )
}