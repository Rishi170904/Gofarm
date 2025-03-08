
import React from 'react';
import { Bug, Shield, AlertTriangle } from 'lucide-react';

interface PestIssue {
  id: number;
  type: string;
  severity: 'high' | 'medium' | 'low';
  location: string;
  detectedDate: string;
  status: 'active' | 'treated' | 'resolved';
}

const pestIssues: PestIssue[] = [
  {
    id: 1,
    type: "Aphids",
    severity: "medium",
    location: "North Field",
    detectedDate: "2024-03-15",
    status: "treated"
  },
  {
    id: 2,
    type: "Corn Borers",
    severity: "high",
    location: "East Field",
    detectedDate: "2024-03-18",
    status: "active"
  },
  {
    id: 3,
    type: "Spider Mites",
    severity: "low",
    location: "South Field",
    detectedDate: "2024-03-10",
    status: "resolved"
  }
];

function PestControl() {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-500 bg-red-50';
      case 'medium': return 'text-orange-500 bg-orange-50';
      case 'low': return 'text-green-500 bg-green-50';
      default: return 'text-gray-500 bg-gray-50';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-red-700 bg-red-100';
      case 'treated': return 'text-yellow-700 bg-yellow-100';
      case 'resolved': return 'text-green-700 bg-green-100';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4 flex items-center gap-2">
        <Bug className="h-6 w-6 text-red-500" />
        Pest Control Monitor
      </h2>
      <div className="space-y-4">
        {pestIssues.map(issue => (
          <div key={issue.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <Shield className={`h-5 w-5 ${issue.status === 'resolved' ? 'text-green-500' : 'text-gray-400'}`} />
                <h3 className="font-medium text-gray-800">{issue.type}</h3>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(issue.status)}`}>
                {issue.status}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-gray-500">Location</p>
                <p className="font-medium text-gray-700">{issue.location}</p>
              </div>
              <div>
                <p className="text-gray-500">Detected</p>
                <p className="font-medium text-gray-700">{issue.detectedDate}</p>
              </div>
              <div className="col-span-2">
                <div className="flex items-center gap-2">
                  <AlertTriangle className={`h-4 w-4 ${getSeverityColor(issue.severity).split(' ')[0]}`} />
                  <span className={`text-xs px-2 py-1 rounded-full ${getSeverityColor(issue.severity)}`}>
                    {issue.severity} severity
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PestControl;