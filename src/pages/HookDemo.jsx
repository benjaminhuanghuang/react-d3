import React, {useRef, useEffect} from 'react'
import {select} from 'd3';



const data = [15, 4, 39,111]

export default function HookDemo() {
  const svgRef = useRef();
  useEffect(()=>{
    const svg = select(svgRef.current);
    svg.selectAll('circle').data(data).join();
  }, [])
  return (
    <>
    <h1>Hook SVG</h1>
    <svg ref={svgRef}></svg>
    </>
  )
}
