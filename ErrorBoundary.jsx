import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        logErrorToMyService(error, errorInfo) // Любая функция для логирования
    }

    render() {
        if (!this.state.hasError) {
            return this.props.children
        }

        return <h1>Что-то пошло не так</h1>
    }
}

const ChildComponent = () => {
    return <div>Какой-то контент для PR</div>
}

const App = () => {
    return (
        <ErrorBoundary>
            <ChildComponent/>
        </ErrorBoundary>
    )
}