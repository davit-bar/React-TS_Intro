const EventComponent: React.FC = () => {

     const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }

    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {

    }
    return (
    <div>
        <input onChange={onChange} />
        <div draggable onDragStart={onDragStart}>
            Drag me
        </div>
    </div>
    );
};

export default EventComponent;
