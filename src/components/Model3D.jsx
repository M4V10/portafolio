import { Suspense, Component } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-full text-gray-500">
          <p>Modelo no disponible en este dispositivo</p>
        </div>
      )
    }
    return this.props.children
  }
}

const GLBModel = () => {
  const { scene } = useGLTF('/gbl/model3D.glb')
  return <primitive object={scene} scale={0.7} />
}

const Model3D = () => {
  return (
    <div className="w-full">
      <div className="bg-gray-100 dark:bg-gray-950 rounded-2xl overflow-hidden" style={{ height: '420px' }}>
        <ErrorBoundary>
          <Canvas camera={{ position: [5, 5, 5], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Suspense fallback={null}>
              <GLBModel />
            </Suspense>
            <OrbitControls makeDefault autoRotate={false} />
          </Canvas>
        </ErrorBoundary>
      </div>
      <p className="text-gray-500 text-sm mt-4 text-center">
        Arrastra para rotar · Scroll para zoom
      </p>
    </div>
  )
}

export default Model3D
