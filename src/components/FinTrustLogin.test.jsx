import { render, screen, fireEvent } from '@testing-library/react';
import FinTrustLogin from './FinTrustLogin';

test('el botón debe estar deshabilitado al iniciar', () => {
    render(<FinTrustLogin />);
    const loginButton = screen.getByRole('button', { name: /iniciar sesión/i });
    expect(loginButton).toBeDisabled();
});

test('el botón se habilita solo cuando los tres campos están llenos', () => {
    render(<FinTrustLogin />);
    const loginButton = screen.getByRole('button', { name: /iniciar sesión/i });

    const clientCodeInput = screen.getByLabelText(/código de cliente/i);
    const userInput = screen.getByLabelText(/usuario/i);
    const pswdInput = screen.getByLabelText(/contraseña/i);

    fireEvent.change(clientCodeInput, { target: { value: '12345' } });
    fireEvent.change(userInput, { target: { value: 'testuser' } });
    fireEvent.change(pswdInput, { target: { value: 'password' } });

    expect(loginButton).toBeEnabled();
});

test('llama a la función onLogin con los datos correctos al hacer clic', () => {
    const mockLogin = jest.fn();
    render(<FinTrustLogin onLogin={mockLogin} />);

    fireEvent.change(screen.getByLabelText(/código de cliente/i), { target: { value: 'CLIENT123' } });
    fireEvent.change(screen.getByLabelText(/usuario/i), { target: { value: 'fin-user' } });
    fireEvent.change(screen.getByLabelText(/contraseña/i), { target: { value: 'secure_pswd' } });

    fireEvent.click(screen.getByRole('button', { name: /iniciar sesión/i }));

    expect(mockLogin).toHaveBeenCalledWith({
        clientCode: 'CLIENT123',
        user: 'fin-user',
        pswd: 'secure_pswd',
    });
});