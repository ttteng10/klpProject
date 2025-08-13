import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  DetailWrapper: {
    flex: 1,
  },
  ContentWrapper: {
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  NickText: {
    marginTop: 20,
    fontSize: 15,
    fontWeight: 'bold',
  },
  TitleText: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  MainText: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '400',
  },
  ImgWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  ImageStyle: {
    width: '80%',
    aspectRatio: 1,
  },
  CommentWrapper: {
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginTop: 5,
  },
  CommentHeader: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CommentHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  Comment: {
    width: '100%',
    // height: 40,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderTopWidth: 1,
    borderTopColor: '#e2e2e2',
  },
  CommentUser: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  CommentText: {
    fontSize: 15,
  },
  InputWrapper: {
    width: '100%',
    height: 60,
    paddingTop: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#e2e2e2',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 'auto',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  InputStyle: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    paddingLeft: 5,
  },
  SubmitBtn: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
});
