Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/restaurante", "usuario", "contraseña");
import javax.swing.*;
import java.awt.*;

public class RestauranteApp extends JFrame {
    public RestauranteApp() {
        setTitle("Restaurante");
        setSize(800, 600);
        setDefaultCloseOperation(EXIT_ON_CLOSE);

        // Crea y añade los componentes de la interfaz
        // ...

        setVisible(true);
    }
}
JButton btnCrear = new JButton("Crear");
btnCrear.addActionListener(e -> {
    // Lógica para crear un nuevo registro
});

JButton btnLeer = new JButton("Leer");
btnLeer.addActionListener(e -> {
    // Lógica para leer todos los registros
});

JButton btnLeerUno = new JButton("Leer uno");
btnLeerUno.addActionListener(e -> {
    // Lógica para leer un registro específico
});

JButton btnActualizar = new JButton("Actualizar");
btnActualizar.addActionListener(e -> {
    // Lógica para actualizar un registro existente
});

JButton btnBorrar = new JButton("Borrar");
btnBorrar.addActionListener(e -> {
    // Lógica para borrar un registro existente
});
PreparedStatement stmt = conn.prepareStatement("INSERT INTO clientes (nombre, telefono) VALUES (?, ?)");
stmt.setString(1, "Juan");
stmt.setString(2, "555-1234");
stmt.executeUpdate();

PreparedStatement stmt = conn.prepareStatement("SELECT * FROM clientes");
ResultSet rs = stmt.executeQuery();
while (rs.next()) {
    String nombre = rs.getString("nombre");
    String telefono = rs.getString("telefono");
    System.out.println(nombre + ", " + telefono);
}
