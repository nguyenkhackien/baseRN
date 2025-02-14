import {AxiosError} from 'axios';

export function getTimezone() {
  let timezone = 'UTC';
  try {
    timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch (e) {
    console.warn('Cannot get timezone');
  }

  return timezone;
}

export function catchError(
  e: unknown,
  handleError: (errorMessage: string) => void,
) {
  if (typeof e === 'string') {
    handleError(e);
  } else if (e instanceof AxiosError) {
    handleError(e?.response?.data?.message);
  } else if (e instanceof Error) {
    handleError(e.message);
  }
}

export function handleApiError(
  e: unknown,
  setFieldError?: (field: string, message: string | undefined) => void,
  isNotify: boolean = true,
) {
  if (isNotify) {
    catchError(e, _message => {
      // notify('error', message || 'Something went wrong.');
    });
  }

  if (setFieldError && e instanceof AxiosError && e?.response?.data?.data) {
    for (let data of e.response.data.data) {
      setFieldError(data.field, data.message);
    }
  }
}
