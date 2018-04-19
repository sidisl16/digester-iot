package org.research.iot.communication.hub.config.gui;

import java.awt.Color;
import java.awt.EventQueue;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.List;

import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.JTextField;
import javax.swing.border.TitledBorder;

import org.research.iot.communication.hub.model.Reading;
import org.research.iot.communication.hub.service.DeviceCommandService;
import org.research.iot.communication.hub.service.SwingAppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import javax.swing.JToggleButton;
import javax.swing.AbstractAction;
import javax.swing.Action;

@Component
public class ControllerUnitGUI implements SwingAppService {

	private JFrame frmDeviceMonitorAnd;
	private JTextField txtStatus;
	private JTextField texttemp1;
	private JTextField texttemp2;
	private JTextField textPh;
	private JTextField textMoisture;
	private JTextField textGasFlowRate;
	private JTextField textPolling;
	private JTextField textShaftSpeed;
	private JComboBox<String> comboBoxComPorts;
	private JButton btnConnect;
	private boolean isConnected;

	private static final String BTN_CONNECT = "Connect";
	private static final String BTN_DISCONNECT = "Disconnect";

	@Autowired
	private DeviceCommandService commandService;
	private final Action action = new SwingAction();

	/**
	 * Launch the application.
	 */
	public void startSwingApp() {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					frmDeviceMonitorAnd.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the application.
	 */
	public ControllerUnitGUI() {
		initialize();
	}

	/**
	 * Initialize the contents of the frame.
	 */
	private void initialize() {
		frmDeviceMonitorAnd = new JFrame();
		frmDeviceMonitorAnd.setTitle("Device Monitor and Control");
		frmDeviceMonitorAnd.setBounds(100, 100, 781, 450);
		frmDeviceMonitorAnd.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frmDeviceMonitorAnd.getContentPane().setLayout(null);

		JLabel lblNewLabel = new JLabel("COM Ports:");
		lblNewLabel.setBounds(27, 45, 68, 21);
		frmDeviceMonitorAnd.getContentPane().add(lblNewLabel);

		comboBoxComPorts = new JComboBox<String>();
		comboBoxComPorts.setBounds(110, 45, 209, 20);
		frmDeviceMonitorAnd.getContentPane().add(comboBoxComPorts);
		// setComPorts();

		btnConnect = new JButton("Connect");
		btnConnect.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				try {
					if (!isConnected) {
						commandService.connectDevice(comboBoxComPorts.getSelectedItem().toString());
						isConnected = true;
						changeState();
					} else {
						commandService.disConnectDevice();
						isConnected = false;
						changeState();
					}

				} catch (Exception e1) {
					changeState();
					e1.printStackTrace();
					JOptionPane.showMessageDialog(frmDeviceMonitorAnd,
							"Exception while connecting device \n check logs for details!");
				}
			}
		});
		btnConnect.setBounds(343, 44, 89, 23);
		frmDeviceMonitorAnd.getContentPane().add(btnConnect);

		JLabel lblStatus = new JLabel("Status:");
		lblStatus.setBounds(598, 48, 46, 14);
		frmDeviceMonitorAnd.getContentPane().add(lblStatus);

		txtStatus = new JTextField();
		txtStatus.setForeground(Color.WHITE);
		txtStatus.setFont(new Font("Tahoma", Font.BOLD, 11));
		txtStatus.setText("Disconnected");
		txtStatus.setBackground(Color.RED);
		txtStatus.setEditable(false);
		txtStatus.setBounds(652, 45, 83, 20);
		frmDeviceMonitorAnd.getContentPane().add(txtStatus);
		txtStatus.setColumns(10);

		JButton btnRefresh = new JButton("Refresh");
		btnRefresh.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				setComPorts();
			}
		});
		btnRefresh.setBounds(461, 44, 89, 23);
		frmDeviceMonitorAnd.getContentPane().add(btnRefresh);

		JPanel panel = new JPanel();
		panel.setBorder(
				new TitledBorder(null, "Connect Device (COM)", TitledBorder.LEADING, TitledBorder.TOP, null, null));
		panel.setBounds(10, 11, 745, 95);
		frmDeviceMonitorAnd.getContentPane().add(panel);

		JLabel lblNewLabel_1 = new JLabel("Temperature-1 (Farnheit):");
		lblNewLabel_1.setBounds(27, 162, 162, 14);
		frmDeviceMonitorAnd.getContentPane().add(lblNewLabel_1);

		JLabel lblTemperature = new JLabel("Temperature-2 (Farnheit):");
		lblTemperature.setBounds(27, 204, 162, 14);
		frmDeviceMonitorAnd.getContentPane().add(lblTemperature);

		JLabel lblPh = new JLabel("PH:");
		lblPh.setBounds(27, 244, 119, 14);
		frmDeviceMonitorAnd.getContentPane().add(lblPh);

		JLabel lblMoisture = new JLabel("Moisture:");
		lblMoisture.setBounds(27, 281, 119, 14);
		frmDeviceMonitorAnd.getContentPane().add(lblMoisture);

		JLabel lblGasFlowRate = new JLabel("Gas Flow Rate:");
		lblGasFlowRate.setBounds(27, 324, 119, 14);
		frmDeviceMonitorAnd.getContentPane().add(lblGasFlowRate);

		texttemp1 = new JTextField();
		texttemp1.setBackground(Color.WHITE);
		texttemp1.setEditable(false);
		texttemp1.setBounds(199, 159, 86, 20);
		frmDeviceMonitorAnd.getContentPane().add(texttemp1);
		texttemp1.setColumns(10);

		texttemp2 = new JTextField();
		texttemp2.setBackground(Color.WHITE);
		texttemp2.setEditable(false);
		texttemp2.setColumns(10);
		texttemp2.setBounds(199, 201, 86, 20);
		frmDeviceMonitorAnd.getContentPane().add(texttemp2);

		textPh = new JTextField();
		textPh.setBackground(Color.WHITE);
		textPh.setEditable(false);
		textPh.setColumns(10);
		textPh.setBounds(199, 241, 86, 20);
		frmDeviceMonitorAnd.getContentPane().add(textPh);

		textMoisture = new JTextField();
		textMoisture.setBackground(Color.WHITE);
		textMoisture.setEditable(false);
		textMoisture.setColumns(10);
		textMoisture.setBounds(199, 278, 86, 20);
		frmDeviceMonitorAnd.getContentPane().add(textMoisture);

		textGasFlowRate = new JTextField();
		textGasFlowRate.setBackground(Color.WHITE);
		textGasFlowRate.setEditable(false);
		textGasFlowRate.setColumns(10);
		textGasFlowRate.setBounds(199, 321, 86, 20);
		frmDeviceMonitorAnd.getContentPane().add(textGasFlowRate);

		JPanel panel_1 = new JPanel();
		panel_1.setBorder(new TitledBorder(null, "Payload Data", TitledBorder.LEFT, TitledBorder.TOP, null, null));
		panel_1.setBounds(10, 139, 309, 222);
		frmDeviceMonitorAnd.getContentPane().add(panel_1);

		JLabel lblPollingIntervaldefault = new JLabel("Polling interval (Default 2000 ms):");
		lblPollingIntervaldefault.setBounds(360, 171, 200, 14);
		frmDeviceMonitorAnd.getContentPane().add(lblPollingIntervaldefault);

		JLabel lblShaftSpeeddefault = new JLabel("Shaft Speed (Default 20 RPM):");
		lblShaftSpeeddefault.setBounds(360, 248, 200, 14);
		frmDeviceMonitorAnd.getContentPane().add(lblShaftSpeeddefault);

		textPolling = new JTextField();
		textPolling.setColumns(10);
		textPolling.setBackground(Color.WHITE);
		textPolling.setBounds(560, 163, 86, 20);
		frmDeviceMonitorAnd.getContentPane().add(textPolling);

		textShaftSpeed = new JTextField();
		textShaftSpeed.setColumns(10);
		textShaftSpeed.setBackground(Color.WHITE);
		textShaftSpeed.setBounds(560, 245, 86, 20);
		frmDeviceMonitorAnd.getContentPane().add(textShaftSpeed);

		JButton btnPolling = new JButton("Set");
		btnPolling.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				try {
					if(!isConnected) {
						throw new Exception("Device not connected!");
					}
					int pollInterval = Integer.parseInt(textPolling.getText());
					commandService.setPollingFrequency(pollInterval);
					JOptionPane.showMessageDialog(frmDeviceMonitorAnd,
							"Sucessfully polling interval set for device \n Note: Reading data from sensors can add more delay!");
					
				} catch (Exception ex) {
					ex.printStackTrace();
					JOptionPane.showMessageDialog(frmDeviceMonitorAnd,
							"Exception while sending command to device \n"+ex.getMessage());
				}
			}
		});
		btnPolling.setBounds(675, 162, 60, 23);
		frmDeviceMonitorAnd.getContentPane().add(btnPolling);

		JButton btnShaftSpeed = new JButton("Set");
		btnShaftSpeed.setBounds(675, 244, 60, 23);
		frmDeviceMonitorAnd.getContentPane().add(btnShaftSpeed);
		
		JLabel shaftlabelswitch = new JLabel("Shaft Switch :");
		shaftlabelswitch.setBounds(360, 208, 200, 14);
		frmDeviceMonitorAnd.getContentPane().add(shaftlabelswitch);
		
		JToggleButton tglbtnShaftSwitch = new JToggleButton("OFF");
		tglbtnShaftSwitch.setBounds(675, 200, 60, 23);
		tglbtnShaftSwitch.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent e) {
				if(tglbtnShaftSwitch.isSelected()) {
					tglbtnShaftSwitch.setText("ON");
				}else {
					tglbtnShaftSwitch.setText("OFF");
				}
			}
		});
		
		frmDeviceMonitorAnd.getContentPane().add(tglbtnShaftSwitch);
		
		JPanel panel_2 = new JPanel();
		panel_2.setBorder(new TitledBorder(null, "Controls", TitledBorder.LEFT, TitledBorder.TOP, null, null));
		panel_2.setBounds(343, 139, 412, 155);
		frmDeviceMonitorAnd.getContentPane().add(panel_2);
		
		
	}

	@Override
	public void setComPorts() {
		comboBoxComPorts.removeAllItems();
		List<String> comPorts;
		try {
			comPorts = commandService.getAllComPorts();
			comPorts.forEach((com) -> {
				comboBoxComPorts.addItem(com);
			});
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	@Override
	public void changeState() {
		if (isConnected) {
			txtStatus.setText("Connected");
			txtStatus.setBackground(Color.GREEN);
			btnConnect.setText(BTN_DISCONNECT);
		} else {
			txtStatus.setText("Disconnected");
			txtStatus.setBackground(Color.RED);
			btnConnect.setText(BTN_CONNECT);
		}
	}

	@Override
	public void setPayload(Reading reading) {

		texttemp1.setText(String.valueOf(reading.getTemperature1()));
		texttemp2.setText(String.valueOf(reading.getTemperature2()));
		textPh.setText(String.valueOf(reading.getPh()));
		textMoisture.setText(String.valueOf(reading.getMoisture()));
		textGasFlowRate.setText(String.valueOf(reading.getMoisture()));

	}
	private class SwingAction extends AbstractAction {
		public SwingAction() {
			putValue(NAME, "SwingAction");
			putValue(SHORT_DESCRIPTION, "Some short description");
		}
		public void actionPerformed(ActionEvent e) {
		}
	}
}
