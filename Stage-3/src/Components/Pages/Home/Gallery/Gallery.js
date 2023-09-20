import React, {useState} from 'react'
import Loading from '../../../../UI/Loading/Loading'
import './Gallery.css'
import {closestCenter, DndContext} from '@dnd-kit/core'
import {
    SortableContext,
    useSortable,
    arrayMove,
    verticalListSortingStrategy
} from "@dnd-kit/sortable"
import {CSS} from '@dnd-kit/utilities'

const SortableItem = ({image}) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({id: image.tag})
    const style = {
        transition,
        transform: CSS.Transform.toString(transform)
    }
    return (
        <li ref={setNodeRef} style={style} {...attributes} {...listeners} className='image' >
            <img src={image.url} alt='dog'/>
            <p>{image.tag}</p>
        </li>
    )
}

const Gallery = (props) => {
    const [isPending, setIsPending] = useState(true)
    const [dogs, setDogs] = useState(props.data)
    setTimeout(()=>{
        setIsPending(false)
    },3500)
    const onDragEnd = (event) => {
        console.log('onDragEnd', event)
        const {active, over} = event
        if(active.id === over.id){
            return
        }
        setDogs(prev=>{
            const oldIndex = dogs.findIndex(dog => dog.tag === active.id )
            const newIndex = dogs.findIndex(dog => dog.tag === over.id )
            return arrayMove(dogs, oldIndex, newIndex)
        })
    }
    return (
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
            <SortableContext items={props.data} strategy={verticalListSortingStrategy}>
                <ul className = "gallery">
                    {
                        isPending ? <Loading isPending={isPending}/> 
                        : 
                        props.data.map((image, index)=>{
                            return(
                                <SortableItem key={index} image={image}/>
                            )
                        })
                    }
                </ul>
            </SortableContext>
        </DndContext>
    )
}

export default Gallery