// import MaterialJsonSchemaForm from 'react-jsonschema-form-material-ui';

// import Form from '@rjsf/core';
import Form from '@rjsf/mui';

import { RJSFSchema, UiSchema } from '@rjsf/utils';
import validator from '@rjsf/validator-ajv8';

import { useState } from 'react';

type JSONPrimitive = string | number | boolean | null | undefined; 
type JSONValue = JSONPrimitive | JSONValue[] | { [key: string]: JSONValue; };

const xxx: JSONValue = {};

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const Formulator = ({ data = {}, onSubmit }: { data: Object, onSubmit: (data: Object) => void }) => {
  const [formData, setFormData] = useState({});

  const schema: RJSFSchema = {
    title: 'Test form',
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      age: {
        type: 'number',
      },
    },
  };
  
  const uiSchema: UiSchema = {
    name: {
      'ui:classNames': 'custom-class-name',
    },
    age: {
      'ui:classNames': 'custom-class-age',
    },
  };

  if (Object.keys(data).length === 0 && data.constructor === Object) {
    return <> The form will display here! </>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle> Response from OpenAI</CardTitle>
        <CardDescription>
          The response is a JSON Schema that can be used to build a form
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form
          schema={data}
          uiSchema={{}}
          validator={validator}
          onChange={({ formData: {} }) => setFormData(formData)}
          onSubmit={({ formData }) => {
            console.log("form being posted", formData);
            onSubmit(formData);
          }}
          onError={(errors) => console.log(errors)}
        />
        {/*
        <MaterialJsonSchemaForm
          schema={data}
          uiSchema={{}}
          formData={{}}
          onChange={({ formData: {} }) => setFormData(formData)} // FIXME JSONValue
          onSubmit={(data: Object) => {
            console.log("form being posted", data);
            onSubmit(data);
          }}
        />
        */}
      </CardContent>
      <CardFooter>
        <p>Form constructed using JSON Schema:</p>
        <br />
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </CardFooter>
    </Card>
  );
}

export default Formulator