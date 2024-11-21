import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Cpu, Clock, CheckCircle, AlertCircle, Hourglass, Mail } from "lucide-react";

const WorkerDashboard = () => {
  // Sample data - in real usage, this would be passed as props
  const workers = [
    {
      id: 1,
      name: "Fibonacci processor",
      status: "online",
      tasks: [
        { id: "ac50a252-06f3-4b1e-8da0-39d5bfa36cfa", name: "fibonacci-jeff-1", status: "running", startTime: "11:00 AM", duration: "18m" },
      ]
    },
    {
      id: 2,
      name: "ZKEVM processor",
      status: "online",
      tasks: [
        { id: "9e61d3b4-2f1c-4808-bed5-90cbd4452c98", name: "zkevm-polygon-block-13202021", status: "running", startTime: "10:30 AM", duration: "48m" },
      ]
    },
    {
      id: 3,
      name: "ZK Onramp",
      status: "offline",
      tasks: [
        { id: "9e61d3b4-2f1c-4808-bed5-90cbd4452c98", name: "zk-onramp-payment-mohak", status: "failed", startTime: "10:45 AM", duration: "33m" },
      ]
    }
    // {
    //   id: 4,
    //   name: "ZK Coprocessor",
    //   status: "online",
    //   tasks: [
    //     { id: "9e61d3b4-2f1c-4808-bed5-90cbd4452c98", name: "zk-coprocessor", status: "scheduled", startTime: "11:17 AM", duration: "1m" },
    //   ]
    // },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online": return "bg-green-500";
      case "offline": return "bg-gray-500";
      default: return "bg-yellow-500";
    }
  };

  const getTaskStatusBadge = (status: string) => {
    switch (status) {
      case "running":
        return <Badge variant="secondary" className="bg-blue-100 text-blue-800">
          <Clock className="w-3 h-3 mr-1" /> Running
        </Badge>;
      case "scheduled":
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
          <Clock className="w-3 h-3 mr-1" /> Scheduled
        </Badge>;
      case "completed":
        return <Badge variant="secondary" className="bg-green-100 text-green-800">
          <CheckCircle className="w-3 h-3 mr-1" /> Completed
        </Badge>;
      case "failed":
        return <Badge variant="secondary" className="bg-red-100 text-red-800">
          <AlertCircle className="w-3 h-3 mr-1" /> Failed
        </Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Worker Tasks Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workers.map((worker) => (
          <Card key={worker.id} className="shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cpu className="w-5 h-5" />
                  <CardTitle className="text-lg">{worker.name}</CardTitle>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${getStatusColor(worker.status)}`} />
                  <span className="text-sm text-gray-600 capitalize">{worker.status}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[280px] pr-4">
                <div className="space-y-4">
                  {worker.tasks.map((task) => (
                    <div
                      key={task.id}
                      className="p-4 rounded-lg border bg-gray-50/50 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{task.id}</h3>
                      </div>
                        {getTaskStatusBadge(task.status)}
                      <div className="text-sm text-gray-600 space-y-1">
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          <span>{task.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>Start: {task.startTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Hourglass className="w-4 h-4" />
                          <span>Duration: {task.duration}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WorkerDashboard;