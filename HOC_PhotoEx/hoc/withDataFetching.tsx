import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

type InjectedProps<T> = {
  data: T[];
};

export function withDataFetching<P extends object, T>(
  WrappedComponent: React.ComponentType<P & InjectedProps<T>>,
  url: string
) {
  return function EnhancedComponent(props: P) {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(setData)
        .finally(() => setLoading(false));
    }, []);

    if (loading) return <Text>Loading...</Text>;

    return <WrappedComponent {...props} data={data} />;
  };
}