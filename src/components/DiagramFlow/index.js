import React, {useState} from 'react'
import ReactFlow, {Background, Controls} from 'reactflow'
import 'reactflow/dist/style.css'

const initialData = {
    nodes: [
        {id: '1', type: 'input', position: {x: 100, y: 50}, data: {label: 'Start'}},
        {id: '2', position: {x: 200, y: 100}, data:{label: 'Middle'}},
        {id: '3', type: 'output', position: {x: 250, y: 300}, data: {label: 'End'}},
    ],
    edges: [
        {id: 'ed-2', source: '1', target: '2', type: 'default'},
        {id: 'ed-3', source: '2', target: '3', type: 'default'},
    ]
}

function DiagramFlow() {
    const [metadata, setMetadata] = useState(initialData)

    const onAddNode = () => {
        const newNode = {
            id: (metadata.nodes.length + 1).toString(),
            position: {x: Math.random()*400, y: Math.random()*400},
            data: {label: `Node ${metadata.nodes.length + 1}`},
        }
        setMetadata((prev) => ({
            ...prev,
            nodes: [...prev.nodes, newNode]
        }))
    }

    return (
        <div style={{height: '100vh', width: '100vw'}}>
            <button style={{backgroundColor: 'blue', color: '#ffffff', border: 'none', borderRadius: '2px', marginLeft:'50vw', marginTop: '10vh', position: 'absolute', padding: '10px', cursor: 'pointer'}} onClick={onAddNode}>
                Add Node
            </button>
            <ReactFlow metadata={metadata}>
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    )
}

export default DiagramFlow
