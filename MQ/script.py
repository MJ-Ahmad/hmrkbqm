import os

# Root directory
root_dir = "Hifz_Students"

# List of student names (duplicates removed for clarity)
students = [
    "Abid_Hasan", "Enamul_Haque", "Foysal_Ahmed", "Arafat", "Mahi", "Zubair",
    "Abu_Talha", "Shahadat", "Jihad", "Asif", "Afrad", "Tamim", "Rahat",
    "Tawfiq", "Sabbir", "Sakib", "Shuaib", "Mafin", "Mubashshubir", "Musaddek",
    "Riadul", "Ahkam", "Junaid", "Hasib", "Nabil", "Taskin", "Amir_Hamza"
]

def create_structure():
    # Create root folder if not exists
    if not os.path.exists(root_dir):
        os.makedirs(root_dir)
        print(f"Created root folder: {root_dir}")

    # Create subfolders and README.md files
    for student in students:
        student_path = os.path.join(root_dir, student)
        os.makedirs(student_path, exist_ok=True)

        readme_path = os.path.join(student_path, "README.md")
        if not os.path.exists(readme_path):
            with open(readme_path, "w", encoding="utf-8") as f:
                f.write(f"# {student}\n\n")
                f.write("This folder contains records and notes for the student.\n")
            print(f"Created: {readme_path}")
        else:
            print(f"Already exists: {readme_path}")

if __name__ == "__main__":
    create_structure()
    print("\n✅ Folder tree with README files generated successfully!")
