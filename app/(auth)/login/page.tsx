'use client';

import { Form, Formik } from 'formik';
import Input from '../../../components/ui/Input';
import { Icon } from '@iconify/react';

export default function LoginPage() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1>Login Page</h1>
      <div className="w-[400px]">
        <Formik
          enableReinitialize={true}
          initialValues={{ email: '' }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Input label="Email" name="email" type="email" />

              <button
                type="submit"
                disabled={isSubmitting}
                className={'bg-brand text-white flex px-6 py-2 rounded-md mt-5'}
              >
                {isSubmitting ? (
                  <Icon
                    icon={'line-md:loading-twotone-loop'}
                    fontSize={22}
                    className={'mr-2'}
                  />
                ) : (
                  <Icon
                    icon="ph:rocket-launch-light"
                    fontSize={24}
                    className={'mr-2'}
                  />
                )}
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
