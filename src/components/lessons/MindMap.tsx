"use client";

import { useState } from "react";
import { GitCommit, GitBranch, ChevronDown, ChevronRight, HelpCircle, BookOpen } from "lucide-react";
import { MindMapNode } from "@/lib/types";

interface MindMapProps {
  rootNode: MindMapNode;
}

export default function MindMap({ rootNode }: MindMapProps) {
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({
    [rootNode.id]: true,
    "mm-basics": true,
    "mm-rates": true,
    "mm-equations": true,
    "mm-graphs": true
  });
  const [selectedNode, setSelectedNode] = useState<MindMapNode>(rootNode);

  const toggleNode = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedNodes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelectNode = (node: MindMapNode) => {
    setSelectedNode(node);
  };

  // Helper to describe nodes for details panel
  const getNodeExplanation = (node: MindMapNode): string => {
    if (node.description) return node.description;
    switch (node.id) {
      case "root-motion":
        return "Motion is the change in position of an object over time. This chapter covers the metrics we use to measure motion, the equations that calculate it, and how to plot it on graphs.";
      case "mm-basics":
        return "Basic properties describing the position of an object. Position requires a reference point (origin).";
      case "mm-distance":
        return "Distance is the total length of the actual path covered by a moving body. It is scalar, meaning it has magnitude but no direction.";
      case "mm-displacement":
        return "Displacement is the shortest straight-line distance from the initial position to the final position. It is a vector quantity (has direction) and can be zero.";
      case "mm-rates":
        return "Rates of motion measure how fast an object is moving and how its speed or direction changes over time.";
      case "mm-speed":
        return "Speed is the distance covered per unit time. Formula: Speed = Distance / Time. It is a scalar quantity, measured in meters per second (m/s).";
      case "mm-velocity":
        return "Velocity is speed in a specified direction (displacement per unit time). It is a vector quantity. Changes if speed or direction changes.";
      case "mm-acceleration":
        return "Acceleration is the rate of change of velocity: a = (v - u) / t. Measured in m/s². If velocity decreases, it is retardation (negative).";
      case "mm-equations":
        return "The three mathematical formulas that link initial velocity (u), final velocity (v), acceleration (a), displacement (s), and time (t). Valid only for uniform acceleration.";
      case "mm-eq1":
        return "v = u + at. Relates final velocity, initial velocity, acceleration, and time. Derived from the definition of acceleration.";
      case "mm-eq2":
        return "s = ut + 1/2 at². Relates displacement, initial velocity, acceleration, and time. Represents position-time relationship.";
      case "mm-eq3":
        return "v² = u² + 2as. Relates final velocity, initial velocity, acceleration, and displacement. Does not require time.";
      case "mm-graphs":
        return "Visual representation of motion over time. Graph slopes and areas represent other motion variables.";
      case "mm-g1":
        return "Distance-Time Graph: The slope (gradient) of the line represents the speed of the object. Steeper slope = faster speed.";
      case "mm-g2":
        return "Velocity-Time Graph: The slope of the line represents the acceleration. Horizontal line means constant velocity (zero acceleration).";
      case "mm-g3":
        return "Velocity-Time Graph Area: The total area under the v-t curve represents the net displacement traveled by the object.";
      default:
        return node.label + " - A key details node in this chapter. Double click or read lessons to master this fully!";
    }
  };

  // Recursive render component for the mind map tree
  const renderNode = (node: MindMapNode, depth = 0) => {
    const isExpanded = expandedNodes[node.id];
    const isSelected = selectedNode.id === node.id;
    const hasChildren = node.children && node.children.length > 0;

    let typeColors = "bg-indigo-600 text-white dark:bg-indigo-500";
    if (node.type === "main") typeColors = "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-900";
    if (node.type === "sub") typeColors = "bg-emerald-50 text-emerald-800 border-emerald-250 dark:bg-emerald-950/20 dark:text-emerald-300 dark:border-emerald-900/50";
    if (node.type === "detail") typeColors = "bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-750";

    return (
      <div key={node.id} className="flex flex-col ml-4 md:ml-6 mt-2">
        <div className="flex items-center gap-2 group">
          {/* Collapse/Expand Toggle Indicator */}
          {hasChildren ? (
            <button
              onClick={(e) => toggleNode(node.id, e)}
              className="flex h-5 w-5 items-center justify-center rounded bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-450 dark:hover:bg-slate-750"
            >
              {isExpanded ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
            </button>
          ) : (
            <div className="flex h-5 w-5 items-center justify-center text-slate-300 dark:text-slate-700">
              <GitCommit className="h-3 w-3" />
            </div>
          )}

          {/* Node pill */}
          <div
            onClick={() => handleSelectNode(node)}
            className={`cursor-pointer rounded-xl border px-3 py-1.5 text-xs font-semibold shadow-sm transition-all duration-200 hover:shadow-md ${typeColors} ${
              isSelected ? "ring-2 ring-indigo-500 ring-offset-2 dark:ring-offset-slate-900" : ""
            }`}
          >
            {node.label}
          </div>
        </div>

        {/* Render children if expanded */}
        {hasChildren && isExpanded && (
          <div className="relative border-l border-dashed border-slate-200 pl-2 mt-1 dark:border-slate-800">
            {node.children!.map((child) => renderNode(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
      <div className="flex flex-col gap-1">
        <span className="text-xs font-semibold tracking-wider text-indigo-600 uppercase dark:text-indigo-400">
          Interactive Study Map
        </span>
        <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-slate-50 md:text-xl mt-0.5">
          Chapter Mind Map
        </h3>
        <p className="text-xs text-slate-500 mt-1 dark:text-slate-400">
          Click the arrow buttons to expand/collapse nodes. Click any item card to read its details.
        </p>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-12">
        {/* Mind Map Canvas */}
        <div className="lg:col-span-8 max-h-[400px] overflow-y-auto rounded-2xl border border-slate-100 bg-slate-50/40 p-4 dark:border-slate-850 dark:bg-slate-950/20">
          <div className="relative -ml-4">
            {renderNode(rootNode)}
          </div>
        </div>

        {/* Selected Node Details Sidebar */}
        <div className="lg:col-span-4 rounded-2xl border border-indigo-50 bg-indigo-50/15 p-5 dark:border-indigo-950/20 dark:bg-indigo-950/10 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-indigo-755 dark:text-indigo-400">
              <BookOpen className="h-4.5 w-4.5" />
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider">
                Node Inspector
              </h4>
            </div>

            <div className="space-y-2">
              <span className={`inline-flex rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider border ${
                selectedNode.type === "root"
                  ? "bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-400"
                  : selectedNode.type === "main"
                  ? "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-400"
                  : selectedNode.type === "sub"
                  ? "bg-emerald-105 text-emerald-700 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-400"
                  : "bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-400"
              }`}>
                {selectedNode.type} Node
              </span>
              <h5 className="font-heading text-base font-bold text-slate-800 dark:text-slate-205">
                {selectedNode.label}
              </h5>
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                {getNodeExplanation(selectedNode)}
              </p>
            </div>
          </div>

          <div className="mt-6 border-t border-indigo-100/50 pt-3 dark:border-indigo-900/20 text-[10px] text-indigo-600/80 dark:text-indigo-455 font-semibold">
            Tip: Expand sub-nodes to reveal final formula definitions and graphs!
          </div>
        </div>
      </div>
    </div>
  );
}
