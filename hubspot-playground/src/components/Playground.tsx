import React, { useState } from 'react';
import { CustomCard } from './CustomCard';
import { triggerWebhook, simulateError } from '../utils/mockApi';
import type { WebhookResponse } from '../utils/mockApi';
import './Playground.css';

export const Playground: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [webhookResult, setWebhookResult] = useState<WebhookResponse | null>(null);

  const startSimulation = async () => {
    setIsProcessing(true);
    setWebhookResult(null);
    setProgress(0);

    const result = await triggerWebhook((p) => {
      setProgress(p);
    });

    setWebhookResult(result);
    setIsProcessing(false);
  };

  const triggerError = async () => {
    setIsProcessing(true);
    setWebhookResult(null);
    setProgress(0);

    const result = await simulateError((p) => {
      setProgress(p);
    });

    setWebhookResult(result);
    setIsProcessing(false);
  };

  const cardProps = {
    title: webhookResult?.success  && webhookResult.data ? `${webhookResult.data.lead_name}'s Overview` : 'Customer Overview',
    description: webhookResult?.success
      ? 'Action synced for HubSpot'
      : webhookResult?.error
        ? `Error: ${webhookResult.error}`
        : 'Key metrics and status for this account.',
    status: (progress === 100 && webhookResult?.success ? 'success' : isProcessing ? 'info' : webhookResult?.error ? 'danger' : 'warning') as any,
    statusLabel: progress === 100 && webhookResult?.success ? 'Synced' : isProcessing ? 'Processing...' : webhookResult?.error ? 'Failed' : 'Pending Sync',
    alertMessage: progress === 100 && webhookResult?.success
      ? 'Workflow action completed successfully!'
      : isProcessing
        ? 'Synchronizing with HubSpot CRM...'
        : webhookResult?.error
          ? webhookResult.error
          : undefined,
    stats: [
      { label: 'Monthly Revenue', value: "$0" },
      { label: 'Tickets Opened', value: "-" },
    ],
    progressValue: progress,
    progressLabel: isProcessing ? 'Workflow Action Progress' : 'Last Sync Status',
    isProcessing,
    onTrigger: startSimulation,
    onTriggerError: triggerError,
    webhookData: webhookResult,
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
