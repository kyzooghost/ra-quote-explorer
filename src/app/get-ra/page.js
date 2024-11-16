"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React, { useState, useEffect, useTransition, useRef } from "react";
import { ofetch } from "ofetch";
import { Textarea } from "@/components/ui/textarea";

export default function GetRAPage() {
    const [RAQuote, setRAQuote] = useState('');
    const [isPending, startTransition] = useTransition();
    const [orchestratorId, setOrchestratorId] = useState('');
    const [workerId, setWorkerId] = useState('');
    const [taskId, setTaskId] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        // Recalculate disabled state based on refs and pending state
        setIsDisabled(
            isPending || 
            orchestratorId == '' ||
            workerId == '' ||
            taskId == '' ||
            RAQuote != ''
        );
    }, [isPending, orchestratorId, workerId, taskId]);

    const handleGetRA = async () => {
        startTransition(async () => {
            try {
                const data = await ofetch('/api/get-ra');
                setRAQuote(data);
                console.log(data);
            } catch (error) {
                console.error(error);
            //   setError(
            //     error instanceof Error ? error.message : "An unknown error occurred",
            //   );
            }
          });
    };

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center">
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Get Remote Attestation
                </h1>
            </div>
            <Card className="space-y-2 pt-6 mt-6" >
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                    <form>
          <div className="grid w-full items-center gap-4 mb-6">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Orchestrator ID</Label>
              <Input id="orchestratorId" placeholder="Enter an orchestrator ID" 
              onChange={(e)=>setOrchestratorId(e?.target?.value)}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Worker ID</Label>
              <Input id="workerId" placeholder="Enter an worker ID"
              onChange={(e)=>setWorkerId(e?.target?.value)}/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Task ID</Label>
              <Input id="taskId" placeholder="Enter an task ID"
              onChange={(e)=>setTaskId(e?.target?.value)}/>
            </div>
          </div>
        </form>
                </div>

                    <Button
            onClick={handleGetRA}
            disabled={isDisabled}
            className="w-full"
          >
            {isPending ? "Retrieving..." : "Get Remote Attestation"}
          </Button>
          <Textarea
                  rows={20}
                  value={RAQuote?.quote}
                  readOnly
                  className="font-mono h-48 bg-gray-50/50"
                />
                </CardContent>
            </Card>
      </div>
      




      </div>
    );
}