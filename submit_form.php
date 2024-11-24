<?php
require('fpdf.php'); // Include FPDF library

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $full_name = $_POST['full_name'];
    $address = $_POST['address'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $qualification = $_POST['qualification'];
    $duration = $_POST['duration'];
    $sponsor = $_POST['sponsor'];

    // Create a new PDF document
    $pdf = new FPDF();
    $pdf->AddPage();
    $pdf->SetFont('Arial', 'B', 16);

    // Title
    $pdf->Cell(0, 10, 'Eportals Computer Training Center - Registration Form', 0, 1, 'C');
    $pdf->Ln(10);

    // Add form data to PDF
    $pdf->SetFont('Arial', '', 12);
    $pdf->Cell(0, 10, 'Full Name: ' . $full_name, 0, 1);
    $pdf->Cell(0, 10, 'Address: ' . $address, 0, 1);
    $pdf->Cell(0, 10, 'Phone No: ' . $phone, 0, 1);
    $pdf->Cell(0, 10, 'Email: ' . $email, 0, 1);
    $pdf->Cell(0, 10, 'Educational Qualification: ' . $qualification, 0, 1);
    $pdf->Cell(0, 10, 'Duration of Training: ' . $duration, 0, 1);
    $pdf->Cell(0, 10, 'Sponsor: ' . $sponsor, 0, 1);

    // Output PDF as a downloadable file
    $pdf_file_name = "registration_" . time() . ".pdf";
    $pdf->Output('F', $pdf_file_name); // Save the PDF file on the server

    // Send the PDF as a response
    header("Content-Type: application/pdf");
    header("Content-Disposition: attachment; filename=$pdf_file_name");
    readfile($pdf_file_name);

    // Delete the file from the server after download
    unlink($pdf_file_name);
} else {
    echo "Invalid request.";
}
?>
