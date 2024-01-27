
input_str = input("INPUT: Gender, Octagram, and Type (Example 1: Male UD | SF INFJ) (Example 2: Female SD | UF INTP). Capitalize gender: ")
parts = input_str.split()
gender = parts[0]
octagram = parts[1] + " " + parts[2] + " " + parts[3]
Type = parts[4]
final_octagram = ""
primary_function_Gender =""
    # Define a list to store the values

ISTJ = ["ISTJ","Si-Hero","Te-Parent","Fi-Child","Ne-Inferior","Se-Nemesis","Ti-Critic","Fe-Trickster","Ni-Demon","Delta Quadra","Soul Temple",]
ISFJ = ["ISFJ","Si-Hero","Fe-Parent","Ti-Child","Ne-Inferior","Se-Nemesis","Fi-Critic","Te-Trickster","Ni-Demon","Alpha Quadra","Heart Temple"]
INFJ = ["INFJ","Ni-Hero","Fe-Parent","Ti-Child","Se-Inferior","Ne-Nemesis","Fi-Critic","Te-Trickster","Si-Demon","Beta Quadra","Soul Temple"]
INTJ = ["INTJ","Ni-Hero","Te-Parent","Fi-Child","Se-Inferior","Ne-Nemesis","Ti-Critic","Fe-Trickster","Si-Demon","Gamma Quadra","Heart Temple"]
ISTP = ["ISTP","Ti-Hero","Se-Parent","Ni-Child","Fe-Inferior","Te-Nemesis","Si-Critic","Ne-Trickster","Fi-Demon","Beta Quadra","Mind Temple"]
ISFP = ["ISFP","Fi-Hero","Se-Parent","Ni-Child","Te-Inferior","Fe-Nemesis","Si-Critic","Ne-Trickster","Ti-Demon","Gamma Quadra","Body Temple"]
INFP = ["INFP","Fi-Hero","Ne-Parent","Si-Child","Te-Inferior","Fe-Nemesis","Ni-Critic","Se-Trickster","Ti-Demon","Delta Quadra","Mind Temple"]
INTP = ["INTP","Ti-Hero","Ne-Parent","Si-Child","Fe-Inferior","Te-Nemesis","Ni-Critic","Se-Trickster","Fi-Demon","Alpha Quadra","Body Temple"]
ESTP = ["ESTP","Se-Hero","Ti-Parent","Fe-Child","Ni-Inferior","Si-Nemesis","Te-Critic","Fi-Trickster","Ne-Demon","Beta Quadra","Soul Temple"]
ESFP = ["ESFP","Se-Hero","Fi-Parent","Te-Child","Ni-Inferior","Si-Nemesis","Fe-Critic","Ti-Trickster","Ne-Demon","Gamma Quadra","Heart Temple"]
ENFP = ["ENFP","Ne-Hero","Fi-Parent","Te-Child","Si-Inferior","Ni-Nemesis","Fe-Critic","Ti-Trickster","Se-Demon","Delta Quadra","Soul Temple"]
ENTP = ["ENTP","Ne-Hero","Ti-Parent","Fe-Child","Si-Inferior","Ni-Nemesis","Te-Critic","Fi-Trickster","Se-Demon","Alpha Quadra","Heart Temple"]
ESTJ = ["ESTJ","Te-Hero","Si-Parent","Ne-Child","Fi-Inferior","Ti-Nemesis","Se-Critic","Ni-Trickster","Fe-Demon","Delta Quadra","Mind Temple"]
ESFJ = ["ESFJ","Fe-Hero","Si-Parent","Ne-Child","Ti-Inferior","Fi-Nemesis","Se-Critic","Ni-Trickster","Te-Demon","Alpha Quadra","Body Temple"]
ENFJ = ["ENFJ","Fe-Hero","Ni-Parent","Se-Child","Ti-Inferior","Fi-Nemesis","Ne-Critic","Si-Trickster","Te-Demon","Beta Quadra","Mind Temple"]
ENTJ = ["ENTJ","Te-Hero","Ni-Parent","Se-Child","Fi-Inferior","Ti-Nemesis","Ne-Critic","Si-Trickster","Fe-Demon","Gamma Quadra","Body Temple"]


# Your string representing the variable name
type_string = Type

# Using globals() to get the variable from the string
Type = globals()[type_string]

# Now you can use 'Type' as the variable

mbti_lists = [INFJ, ISFJ, ISTP, INTP, ISFP, INFP, ISTJ, INTJ, ESTP, ESFP, ENFP, ENTP, ESTJ, ESFJ, ENFJ, ENTJ]

def find_mbti_type(Type, *lists):
    for lst in lists:
        if lst[0] == Type:
            return lst
    return None

def get_type(gender, octagram, Type):
        user_input = input("How do you want the list sorted? (Write: Octagram/Temple/Quadra): ")

        if octagram == "SD | SF":
            Octagram_slots1 = 3
            Octagram_slots2 = 4
            if gender == "Male":
                if "i" in Type[Octagram_slots1][:2]:
                    universal_compatibility_function = Octagram_slots1
                if "i" in Type[Octagram_slots2][:2]:
                        universal_compatibility_function = Octagram_slots2
            elif gender == "Female":
                if "e" in Type[Octagram_slots1][:2]:
                    universal_compatibility_function = Octagram_slots1
                if "e" in Type[Octagram_slots2][:2]:
                        universal_compatibility_function = Octagram_slots2
        if octagram == "SD | UF":
            Octagram_slots1 = 5
            Octagram_slots2 = 6
            if gender == "Male":
                if "i" in Type[Octagram_slots1][:2]:
                    universal_compatibility_function = Octagram_slots1
                if "i" in Type[Octagram_slots2][:2]:
                        universal_compatibility_function = Octagram_slots2
            elif gender == "Female":
                if "e" in Type[Octagram_slots1][:2]:
                    universal_compatibility_function = Octagram_slots1
                if "e" in Type[Octagram_slots2][:2]:
                        universal_compatibility_function = Octagram_slots2
        if octagram == "UD | SF":
            Octagram_slots1 = 1
            Octagram_slots2 = 2
            if gender == "Male":
                if "i" in Type[Octagram_slots1][:2]:
                    universal_compatibility_function = Octagram_slots1
                if "i" in Type[Octagram_slots2][:2]:
                        universal_compatibility_function = Octagram_slots2
            elif gender == "Female":
                if "e" in Type[Octagram_slots1][:2]:
                    universal_compatibility_function = Octagram_slots1
                if "e" in Type[Octagram_slots2][:2]:
                        universal_compatibility_function = Octagram_slots2
        if octagram == "UD | UF":
            Octagram_slots1 = 7
            Octagram_slots2 = 8
            if gender == "Male":
                if "i" in Type[Octagram_slots1][:2]:
                    universal_compatibility_function = Octagram_slots1
                if "i" in Type[Octagram_slots2][:2]:
                        universal_compatibility_function = Octagram_slots2
            elif gender == "Female":
                if "e" in Type[Octagram_slots1][:2]:
                    universal_compatibility_function = Octagram_slots1
                if "e" in Type[Octagram_slots2][:2]:
                        universal_compatibility_function = Octagram_slots2
        modified_type = Type.copy()
        # Create a copy of Type

        # Modify the copied list without altering the original Type list
        if gender == "Male":
            if Type[Octagram_slots1][1] == "i":
                modified_type[Octagram_slots1] = Type[Octagram_slots1][:1] + "e" + Type[Octagram_slots1][2:]
                new_start = modified_type[Octagram_slots1][:2]
            elif Type[Octagram_slots2][1] == "i":
                modified_type[Octagram_slots2] = Type[Octagram_slots2][:1] + "e" + Type[Octagram_slots2][2:]
                new_start = modified_type[Octagram_slots2][:2]
            else:
                new_start = ""
        if gender == "Female":
            if Type[Octagram_slots1][1] == "e":
                modified_type[Octagram_slots1] = Type[Octagram_slots1][:1] + "i" + Type[Octagram_slots1][2:]
                new_start = modified_type[Octagram_slots1][:2]
            elif Type[Octagram_slots2][1] == "e":
                modified_type[Octagram_slots2] = Type[Octagram_slots2][:1] + "i" + Type[Octagram_slots2][2:]
                new_start = modified_type[Octagram_slots2][:2]
            else:
                new_start = ""
        if gender == "Male":
            primary_function_Gender = "Feminine Primary Function"
        elif gender == "Female":
            primary_function_Gender = "Masculine Primary Function"
        print()
        print(gender, octagram, Type[0], "with", Type[universal_compatibility_function],  "is universally compatible with:", new_start, primary_function_Gender)

        # Search in mbti_lists for new_start and print only the first occurrence in each MBTI type list
        # Assume new_start has been defined earlier in your script
        if new_start:
            # Initialize dictionaries for each category
            octagram_results = {"SD | SF": [], "SD | UF": [], "UD | SF": [], "UD | UF": []}
            quadra_results = {"Alpha Quadra": [], "Gamma Quadra": [], "Beta Quadra": [], "Delta Quadra": []}
            temple_results = {"Soul Temple": [], "Heart Temple": [], "Mind Temple": [], "Body Temple": []}

            # Iterate through mbti_lists to populate the dictionaries
            for lst in mbti_lists:
                for element_index, element in enumerate(lst):
                    if element.startswith(new_start):
                        final_octagram = ""
                        # Determine final_octagram based on the element index
                        if element_index in (3, 4):
                            final_octagram = "SD | SF"
                        elif element_index in (5, 6):
                            final_octagram = "SD | UF"
                        elif element_index in (1, 2):
                            final_octagram = "UD | SF"
                        elif element_index in (7, 8):
                            final_octagram = "UD | UF"

                        # Store results in respective dictionaries
                        if final_octagram:
                            octagram_results[final_octagram].append((lst[0], element, final_octagram, lst[9], lst[10]))
                            quadra_results[lst[9]].append((lst[0], element, final_octagram, lst[9], lst[10]))
                            temple_results[lst[10]].append((lst[0], element, final_octagram, lst[9], lst[10]))

        # Printing results based on user input
        if user_input == "Octagram":
            print()
            print("You chose to sort by OCTAGRAM:")
            print()
            for octagram in octagram_results:
                for result in octagram_results[octagram]:
                    print(result[2], result[0], "contains", result[1])
                print()

        elif user_input == "Quadra":
            print()
            print("You chose to sort by QUADRA:")
            print()
            for quadra in quadra_results:
                for result in quadra_results[quadra]:
                    print(result[3],  result[2], result[0], "contains", result[1])
                print()

        elif user_input == "Temple":
            print()
            print("You chose to sort by TEMPLE:")
            print()
            for temple in temple_results:
                for result in temple_results[temple]:
                    print(result[4], result[2], result[0], "contains", result[1])
                print()

get_type(gender, octagram, Type)