"use client"
import React from "react"
import ErrorFallbackUi from "./ErrorFallbackUi";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallbackUI?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props : ErrorBoundaryProps) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error : Error) : ErrorBoundaryState {
        console.log({ error });
      return { hasError: true };
    }
  
    componentDidCatch(error : Error, info : React.ErrorInfo) {
        console.log("error->>",{error,info})
    }
  
    render() {
      if (this.state.hasError) {
        return this.props.fallbackUI ? this.props.fallbackUI : <ErrorFallbackUi/>;
      }
  
      return this.props.children;
    }
  }

export default ErrorBoundary