/**
 *
 * Foo
 *
 */

import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

function Foo({ user }) {
  const [data, setData] = useState(undefined);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <View>
      {data &&
        data.map((item) => {
          return <Text>{item.title}</Text>;
        })}
    </View>
  );
}

export default Foo;
