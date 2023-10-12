import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../Store/userReducer";
import { RootState } from "../../Store/userReducer";

interface FormValues {
  name: string;
  email: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

const Create = () => {
  const [loading, setLoading] = useState(false);
  const userData = useSelector((state: RootState) => state.userData?.value) as User[];
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const dispatch = useDispatch();
  const [form] = Form.useForm(); // Use Form's form instance
  const navigate = useNavigate();

  const onFinish = (values: FormValues) => {
    console.log("Success:", values);
    const lastUserId = userData && userData.length > 0 ? userData[userData.length - 1].id : 0;
    const newUser: User = {
      id: lastUserId + 1,
      name: values.name,
      email: values.email,
    };

    dispatch(addUser(newUser));
    navigate("/");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h2 className="text-center mb-3">Typescript Redux Add User</h2>
        <Form
          form={form} // Use the form instance
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name" // Match the 'name' property with the field in FormValues
            rules={[
              {
                required: true,
                message: "Please input your Name!",
              },
            ]}
          >
            <Input onChange={handleNameChange} />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email" // Match the 'email' property with the field in FormValues
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input onChange={handleEmailChange} />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Create;
