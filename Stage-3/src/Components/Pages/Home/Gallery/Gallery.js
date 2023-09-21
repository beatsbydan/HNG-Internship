import React, {useEffect, useState} from 'react'
import Loading from '../../../../UI/Loading/Loading'
import './Gallery.css'
import {
    closestCenter,
    DndContext,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragOverlay
} from '@dnd-kit/core'
import {
    SortableContext,
    useSortable,
    arrayMove,
    sortableKeyboardCoordinates,
    rectSortingStrategy
} from "@dnd-kit/sortable"
import {CSS} from '@dnd-kit/utilities'

const SortableItem = ({image}) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({id: image.tag})

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.7 : 1
    }

    return (
        <li ref={setNodeRef} style={style} {...attributes} {...listeners} className='image' >
            <img src={image.url} alt=''/>
            <p>{image.tag}</p>
        </li>
    )
}

const DragOverlayItem = ({ image }) => {
    return <SortableItem image={image} />;
};

const Gallery = (props) => {
    const [isPending, setIsPending] = useState(true)
    const [dogs, setDogs] = useState(props.data)
    const [activeImage, setActiveImage] = useState(null);
    
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );
    
    useEffect(()=>{
        setDogs(props.data)
    },[props.data])
    
    setTimeout(()=>{
        setIsPending(false)
    },3500)

    const onDragEnd = (event) => {
        const {active, over} = event
        if(active.id === over.id){
            return
        }
        setDogs(items=>{
            const oldIndex = items.findIndex(dog => dog.tag === active.id )
            const newIndex = items.findIndex(dog => dog.tag === over.id )
            return arrayMove(items, oldIndex, newIndex)
        })
    }
    const onDragStart = (event) => {
        const activeImage = dogs.filter(dog=> dog.tag === event.active.id)
        setActiveImage(activeImage)
    }
    return (
        <DndContext 
            collisionDetection={closestCenter} 
            onDragEnd={onDragEnd}
            onDragStart={onDragStart}
            sensors={sensors}
        >
            <ul className = "gallery">
                <SortableContext 
                    items={dogs} 
                    strategy={rectSortingStrategy}
                >
                    {
                        isPending ? <Loading isPending={isPending}/> 
                        : 
                        dogs.map((image, index) =>{ 
                            return (
                                <SortableItem 
                                    key={index} 
                                    isDragging={activeImage?.tag === image.tag} 
                                    image={image}
                                />
                            )
                        })
                    }
                </SortableContext>
            </ul>
            <DragOverlay>
                {activeImage ? <DragOverlayItem image={activeImage} /> : null}
            </DragOverlay>
        </DndContext>
    )
}

export default Gallery