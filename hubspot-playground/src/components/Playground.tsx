import React, { useState } from 'react';
import { CustomCard } from './CustomCard';
import { simulateWorkflowAction } from '../utils/mockApi';
import type { HubSpotWebhookEvent } from '../utils/mockApi';
import './Playground.css';

export const Playground: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [webhookData, setWebhookData] = useState<HubSpotWebhookEvent | null>(null);

  const startSimulation = async () => {
    setIsProcessing(true);
    setWebhookData(null);
    setProgress(0);
    
    const data = await simulateWorkflowAction((p) => {
      setProgress(p);
    });
    
    setWebhookData(data);
    setIsProcessing(false);
  };

  const cardProps = {
    title: webhookData ? `${webhookData.object.properties.firstname}'s Overview` : 'Customer Overview',
    description: webhookData ? `Action synced for ${webhookData.object.properties.company}` : 'Key metrics and status for this account.',
    status: (progress === 100 ? 'success' : isProcessing ? 'info' : 'warning') as any,
    statusLabel: progress === 100 ? 'Synced' : isProcessing ? 'Processing...' : 'Pending Sync',
    alertMessage: progress === 100 ? 'Workflow action completed successfully!' : isProcessing ? 'Synchronizing with HubSpot CRM...' : undefined,
    stats: [
      { label: 'Monthly Revenue', value: webhookData ? '$4,500' : '$0' },
      { label: 'Tickets Open', value: webhookData ? '0' : '-' },
    ],
    progressValue: progress,
    progressLabel: isProcessing ? 'Workflow Action Progress' : 'Last Sync Status',
    isProcessing,
    onTrigger: startSimulation,
    webhookData
  };

  return (
    <div className="playground-container">
      <main className="playground-stage">
        <div className="stage-content">
          <div className="card-wrapper">
             <CustomCard {...cardProps} />
          </div>
        </div>
      </main>
    </div>
  );
};



